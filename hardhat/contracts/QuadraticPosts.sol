//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QuadraticPosts {

    uint256 public postCount;
    uint256 public likeFee = 300000 gwei;

    mapping(uint256 => Post) public posts;
    mapping(uint256 => mapping(address => uint256)) idToUserLikes;

    struct Post {
        uint256 id;
        string uri;
        address creator;
        uint256 likes;
    }

    event PostCreated (
        uint256 indexed id,
        string uri,
        address indexed creator
    );

    event PostLiked (
        uint256 indexed id,
        address liker
    );


    function createPost(string memory _uri) public payable {
        require(bytes(_uri).length > 0);
        posts[postCount] = Post(postCount, _uri, msg.sender, 0);

        emit PostCreated(postCount, _uri, msg.sender);

        postCount++;
    }

    function likePost(uint256 id) public payable {
        uint256 likes = idToUserLikes[id][msg.sender];
        uint256 fee = likeFee * (likes + 1);
        require(msg.value == fee, "User must send correct amount of Ether");
        address creator = posts[id].creator;
        posts[id].likes++;

        idToUserLikes[id][msg.sender] += 1;
        payable(creator).transfer(fee);

        emit PostLiked(id, msg.sender);

    }

    function getPost(uint256 _id) public view returns (Post memory) {
        return posts[_id];
    }

}
