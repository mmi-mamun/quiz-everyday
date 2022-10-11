import React from 'react';
import Post from '../Post/Post';
import './Blog.css'

const Blog = () => {
    const blogPosts = [
        {
            title: "What is the purpose of react router?",

            firstPart: `React router allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app.`,

            secondPart: `React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform.`,

            author: "Nishant Singh ",
            imgUrl:
                "https://s1.o7planning.com/en/12137/images/26763049.png",
        },
        {
            title: "How does Context API works? ",
            firstPart: `The React Context API has been around as an experimental feature for a while now, but only in React’s version 16.3.0 did it become safe to use in production. The article below will show you two basic web store apps, one built with the Context API and one without it.`,

            secondPart: `This new API solves one major problem–prop drilling. Even if you’re not familiar with the term, if you’ve worked on a React.js app, it has probably happened to you. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. Component will receive props indirectly and you, the React Developer will have to ensure everything works out right.`,
            author: "Suresh Kr",
            imgUrl:
                "https://miro.medium.com/max/868/1*YHoRhY7rQGbW1hzOJHgFFg.png",
        },

        {
            title: "Something about useRef()",
            firstPart: `The useRef Hook allows you to persist values between renders.

            It can be used to store a mutable value that does not cause a re-render when updated.
            
            It can be used to access a DOM element directly. `,
            secondPart: `useRef() only returns one item. It returns an Object called current.

            When we initialize useRef we set the initial value: useRef(0).
            
            It's like doing this: const count = {current: 0}. We can access the count by using count.current.`,
            author: "Sonu Kr",
            imgUrl:
                "https://miro.medium.com/max/1400/1*rp5PJMP1LtmLiwVQpReFuQ.jpeg",
        }
    ];

    return (
        <div className="posts-container">
            {blogPosts.map(post =>
                <Post key={post.title} post={post} />
            )}
        </div>
    );
};

export default Blog;