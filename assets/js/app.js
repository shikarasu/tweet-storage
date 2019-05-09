// Variables
const tweetList = document.getElementById("tweet-list");

// Even Listeners
eventListeners();

function eventListeners() {
  document.querySelector("#form").addEventListener("submit", newTweet);

  // Remove tweet from list
  tweetList.addEventListener("click", removeTweet);

  // Document Ready
  document.addEventListener("DOMContentLoaded", localStorageOnLoad);
}

// Functions
function newTweet(e) {
  e.preventDefault();

  // Read the text area value
  const tweet = document.getElementById("tweet").value;

  // Create the remove button
  const removeBtn = document.createElement("a");
  removeBtn.classList = "remove-tweet";
  removeBtn.textContent = "X";

  // Create and <li> element

  const li = document.createElement("li");
  li.textContent = tweet;

  // Add remove button to each tweet

  li.appendChild(removeBtn);

  // Add to the list

  tweetList.appendChild(li);

  // Add tweet to storage
  addTweetLocalStorage(tweet);

  //Print alert
  alert("Tweet Added");

  this.reset();
}

// Removes the tweets from the DOM

function removeTweet(e) {
  if (e.target.classList.contains("remove-tweet")) {
    e.target.parentElement.remove();
  }

  // Remove from storage
  removeTweetLocalStorage(e.target.parentElement.textContent);
}

// Add teweet to locals storage
function addTweetLocalStorage(tweet) {
  let tweets = getTweetsFromStorage();

  // Add tweet into array
  tweets.push(tweet);

  // Convert tweet array into string
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function getTweetsFromStorage() {
  let tweets;
  const tweetsLS = localStorage.getItem("tweets");
  // Get values, if null is returned we create and empty Array

  if (tweetsLS === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetsLS);
  }

  return tweets;
}

// Prints local storage tweet on load
function localStorageOnLoad() {
  let tweets = getTweetsFromStorage();

  // Loop through storage and then print values
  tweets.forEach(function(tweet) {
    // Create the remove button
    const removeBtn = document.createElement("a");
    removeBtn.classList = "remove-tweet";
    removeBtn.textContent = "X";

    // Create and <li> element

    const li = document.createElement("li");
    li.textContent = tweet;

    // Add remove button to each tweet

    li.appendChild(removeBtn);

    // Add to the list

    tweetList.appendChild(li);
  });
}
// Removes tweet from local storage
function removeTweetLocalStorage(tweet) {
  // Get tweets from storage
  let tweets = getTweetsFromStorage();

  //Remove the x from the tweet
  const tweetDelete = tweet.substring(0, tweet.length - 1);

  // Loop trhough the tweets and rmove the tweet that's equal
  tweets.forEach(function(tweetLS, index) {
    if (tweetDelete === tweetLS) {
      tweets.splice(index, 1);
    }
  });

  // Save the data
  localstorage.setItem("tweets", JOSN.stringify(tweets));
}
