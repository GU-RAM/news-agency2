import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../context/AppContext';
import Post from '../../../components/Post/Post';

function Allposts() {
  const { posts, users } = useContext(AppContext);
  console.log('Allposts -> posts', posts);
  return (
    <div>
      <Ul>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <Post post={post} />
            </li>
          );
        })}
      </Ul>
    </div>
  );
}

export default Allposts;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${props =>
    `repeat(${Math.ceil(parseInt(props.children.length) / 3)}, 1fr)`};
  grid-gap: 50px;
  font-size: 14px;
  margin-bottom: 90px;
  padding-left: 0;
  @media only screen and (min-width: 568px) {
    & {
      grid-template-columns: 1fr;
    }
  }
  @media only screen and (min-width: 900px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (min-width: 1200px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  & li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fdf8f5;
    padding: 10px;
    border: 2px solid #ebcebf;
    box-shadow: 0 0 8px #000;

    &:hover {
      box-shadow: 0 0 17px #555;
    }
  }
`;
