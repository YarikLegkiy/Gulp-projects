$('.post__open').click(function(){
    $('.post__comment').slideDown();
});

$('.post__close').click(function(){
    $('.post__comment').slideUp();
});

// const btnOpen = document.getElementById('comment__open');
// const btnClose = document.getElementById('comment__close');
// const comment = document.querySelector('.post__comment');

// btnOpen.addEventListener('click',event => {
//     (function showContainer() {
//         comment.classList.add('.comment__show');
//         comment.style.display = 'block';
//         setTimeout(() => {
//             comment.style.opacity = '1';
//         },200);
//     }());
// });

// btnClose.addEventListener('click',event => {
//     (function closeContainer() {
//         setTimeout(() => {
//             comment.style.opacity = '0';
//             comment.classList.remove('.comment__show');
//         },200);
//         comment.style.display = 'none';
//     }());
// });