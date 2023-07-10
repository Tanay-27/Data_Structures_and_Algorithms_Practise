
let commentArray = [
    {author: 'Tanay',comment:'Hello World', isLiked:true,id:1, children:[]},
    {author: 'Adish',comment:'Stay Strong', isLiked:false,id:2, children:[]},
    {author: 'Shaun',comment:'Grummppppp', isLiked:true,id:3, children:[]},
    {author: 'Elon',comment:'Destination ID', isLiked:false,id:4, children:[]},
    {author: 'Stacy',comment:'Location Access', isLiked:true,id:5, children:[]},
];
let maxID = 5;
document.addEventListener('DOMContentLoaded', () => {
    loadComments(commentArray);
})

function loadComments(commentsArray,parent=null){
    if(!parent){
        const listContainer = document.getElementById('commentListContainer');
        while(listContainer.firstChild) listContainer.removeChild(listContainer.firstChild);
    }
    commentsArray.forEach(item => {
        const commentItem = document.createElement('div');
        commentItem.className = 'comment';
        
        const authorSpan = document.createElement('span');
        authorSpan.className = 'author';
        authorSpan.textContent = item.author;
        
        const commentStr = document.createElement('span');
        commentStr.className = 'commentString';
        commentStr.textContent = item.comment;
        
        const replySpace = document.createElement('span');
        replySpace.className = 'replyLikeSpace';
        replySpace.innerHTML = `<span class="like">${item.isLiked?'&#x2661;':'&#x2665;'}</span>
        <button class="replyBtn" id="${item.id}" onclick="reply(${item.id})">Reply</button>`;
        
        commentItem.appendChild(authorSpan);
        commentItem.appendChild(commentStr);
        commentItem.appendChild(replySpace);

        if(item.children.length>0) loadComments(item.children,commentItem);

        if(parent) parent.appendChild(commentItem);
        else{
            const listContainer = document.getElementById('commentListContainer');
            listContainer.appendChild(commentItem);
        }

    });
}

function addComment(){
    const comment = document.getElementById('commentTxt');
    if(comment.value != ''){
        commentArray.push({author:'Tanay', comment:comment.value});
            comment.value = '';
            loadComments(commentArray);
    }
}

function reply(id){
    let replyElement = document.getElementById(id);
    const parentDiv = replyElement.parentElement.parentElement;
    const replyInput = createReplyElement(id);

    parentDiv.appendChild(replyInput);
    // parentDiv.style.height = parentDiv.scrollHeight + 'px';
}

function createReplyElement(id){
    const replyInputElement = document.createElement('div');
    replyInputElement.className = 'replyInputElement';

    const inputElement = document.createElement('input');
    inputElement.setAttribute('type','text');
    inputElement.setAttribute('id','inputElementId');

    const addBtn = document.createElement('button');
    addBtn.setAttribute('onclick',`addReply(${id})`);
    addBtn.innerText = 'Add';

    replyInputElement.appendChild(inputElement);
    replyInputElement.appendChild(addBtn);

    return replyInputElement;
}

function addReply(id){
    console.log('add reply to id',id);
    const inputElement = document.getElementById('inputElementId');
    const foundComment = findCommentId(commentArray,id);
    console.log({foundComment});
    if(foundComment){
        foundComment.children.push({author: 'Tanay',comment:inputElement.value, isLiked:false,id:++maxID, children:[]});
        inputElement.value = '';
        inputElement.parentElement.style.display = 'none';
        // inputElement.parentElement.parentElement.height = inputElement.parentElement.parentElement.scrollHeight + 'px';
    }
    console.log({commentArray});
    loadComments(commentArray);

}

function findCommentId(commentArray,id){
    for(let i=0;i<commentArray.length;i++){
        let row = commentArray[i];
        console.log({row,comp:row.id===id});
        if(row.id===id) return row;
        else if(row.children && row.children.length>0){
            const found = findCommentId(row.children,id);
            if(found) return found;
        }
    };
    return null;
}