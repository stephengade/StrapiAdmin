module.exports = {
 
      async afterCreate(result, data) {
        const postTitle = result.title;
  
        // Create a new ticket and set the comment's ticket ID
        const newTicket = await strapi.services.ticket.create({
          price: result.price + 100,
          name: postTitle,
          status: 'active',
        });
  
        const newComment = await strapi.services.comment.create({
          description: postTitle,
          ticket: newTicket.id,
        });
  
        // Update the relationships in a single transaction
        await strapi.db.transaction(async (trx) => {
          await trx.query('post')
            .update({ id: result.id }, { comment: newComment.id });
  
          await trx.query('comment')
            .update({ id: newComment.id }, { ticket: newTicket.id });
        });
    
    },
  };
