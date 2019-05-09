"use strict";

$(document).ready(function(){
  AddRandomPosts();
});

function AddRandomPosts(){
  let nbOfPosts = 10;

  for (let i = 0; i < nbOfPosts; i++){
    let postType = Math.floor(Math.random() * 3);

    switch (postType){
      case 0:
        wordPost();
        break;
      case 1:
        imagePost();
        break;
      case 2:
      videoPost();
        break;
    }
  }
}

function wordPost(){
  let $post = $('<div class="post" class="words"></div>');

  $post.text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

  $('#main').append($post);
}

function imagePost(){
  let $post = $('<div class="post" class="image"></div>');

  let isThereWords = Math.floor(Math.random() * 2);

  if (isThereWords === 1){
    let text = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />";
    $post.append(text).append('<br/>');
  }

  $post.append('<img src="assets/images/template-image.png" />');

  $('#main').append($post);
}

function videoPost(){
  let $post = $('<div class="post" class="video"></div>');

  let isThereWords = Math.floor(Math.random() * 2);

  if (isThereWords === 1){
    let text = "Elementum sagittis vitae et leo duis ut.<br />";
    $post.append(text).append('<br/>');;
  }

  $post.append('<img src="assets/videos/template-video.gif" />');

  $('#main').append($post);
}
