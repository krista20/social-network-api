const printUser = ({ _id, userName, reactionCount, createdBy, createdAt }) => {
    const userCard = `
      <div class="col-12 col-lg-6 flex-row">
        <div class="card w-100 flex-column">
          <h3 class="card-header">${userName}</h3>
          <div class="card-body flex-column col-auto">
            <h4 class="text-dark">By ${createdBy}</h4>
            <p>On ${createdAt}</p>
            <p>${reactionCount} Thought</p>
            <a class="btn display-block w-100 mt-auto" href="/user?id=${_id}">See the discussion.</a>
          </div>
        </div>
      </div>
    `;
  
    $userList.innerHTML += userCard;
  };
  
  getUserList();
  