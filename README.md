
---

# **Social App**

## **Overview**
The **Social App** is a social media platform with several interactive features, such as posting, liking, commenting, and music streaming. It is developed using **Kotlin**, with **Firebase** for backend services and **MVVM architecture** for state management. The app is targeted at Android devices.

---

## **Features**
1. **Authentication**:
   - Sign-up using Firebase Authentication.
   - Login using Firebase.
   - User data is securely saved in Firebase Database.

2. **Social Features**:
   - Follow/unfollow users.
   - Post photos.
   - Like and comment on posts.
   - View all comments on a post.
   - Delete posts.

3. **Music Integration**:
   - Listen to music via an integrated player.
   - Search for music information.
   - Save favorite tracks for future access.

4. **User Interaction**:
   - Search for other users.
   - Chat functionality with users.
   - Profile editing for personalization.

---

## **Tech Stack**
- **Programming Language**: Kotlin  
- **Backend**: Firebase (Authentication & Realtime Database)  
- **Architecture**: MVVM  
- **Database**: Room Database (for local caching)  
- **Dependency Injection**: Dagger2/Hilt  
- **Music API**: Last.fm API  
- **Media Player**: ExoPlayer  
- **Concurrency**: Kotlin Coroutines & Flow  

---

## **Database Design**
### **Relational Table Flow Diagram**
```plaintext
[ Users Table ] ---< (1:N) >--- [ Posts Table ] ---< (1:N) >--- [ Comments Table ]
      |
      |
      V
[ Followers Table ]
      |
      |
      V
[ Chats Table ]
```

### **Table Details**:
1. **Users Table**:
   - **user_id**: Primary Key  
   - **username**: String  
   - **email**: String  
   - **profile_picture_url**: String  
   - **bio**: String (optional)  

2. **Posts Table**:
   - **post_id**: Primary Key  
   - **user_id**: Foreign Key (links to Users Table)  
   - **image_url**: String  
   - **caption**: String  
   - **timestamp**: DateTime  

3. **Comments Table**:
   - **comment_id**: Primary Key  
   - **post_id**: Foreign Key (links to Posts Table)  
   - **user_id**: Foreign Key (links to Users Table)  
   - **content**: String  
   - **timestamp**: DateTime  

4. **Followers Table**:
   - **follower_id**: Foreign Key (links to Users Table)  
   - **followed_id**: Foreign Key (links to Users Table)  
   - **timestamp**: DateTime  

5. **Chats Table**:
   - **chat_id**: Primary Key  
   - **sender_id**: Foreign Key (links to Users Table)  
   - **receiver_id**: Foreign Key (links to Users Table)  
   - **message_content**: String  
   - **timestamp**: DateTime  

---

## **Application Workflow**
1. **User Authentication**:
   - User signs up or logs in through Firebase Authentication.
   - After successful login, user data is fetched from Firebase Realtime Database.

2. **Posting and Interaction**:
   - Users create posts with captions and images.
   - Posts are saved in the Posts Table and displayed in the feed.
   - Other users can like and comment on these posts.

3. **Music Features**:
   - Users search for songs using the Last.fm API.
   - Favorite tracks can be saved locally.

4. **User Search and Chat**:
   - Search users by username or other attributes.
   - Initiate chats stored in the Chats Table.

---

## **Flow Diagram**
```plaintext
[ Authentication ] ---> [ Home Feed ] ---> [ Post Creation ]
       |                      |                    |
       |                      V                    V
       |               [ Like/Comment ]       [ Profile Edit ]
       |                      |                    |
       V                      V                    V
[ Music Search ] ---> [ User Search ] ---> [ Chat with Users ]
```

---

## **Screenshots**
1. **Login Screen**: Secure login with Firebase.  
2. **Home Feed**: Displays posts from followed users.  
3. **Post Details**: View, like, and comment on posts.  
4. **Music Player**: Integrated music streaming.  
5. **Profile Screen**: Edit profile and view personal posts.  

---

## **Conclusion**
The **Social App** is a feature-rich platform combining social media and music streaming functionalities. With Firebase for backend operations and Kotlin for seamless UI/UX, it offers a modern, interactive experience for users.

---

