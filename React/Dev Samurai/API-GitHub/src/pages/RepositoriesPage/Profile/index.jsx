import React from "react";

// Import Icons
import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

// Import Styled
import {
  Container,
  Name,
  Login,
  Header,
  Avatar,
  Inner,
  Data,
  Bio,
  Link,
} from "./styles";

const Profile = ({ user }) => {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Bio>{user.bio}</Bio>
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>

      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.followers} Seguidores
        </Data>
        <Data>
          <MdGroup size={20} />
          {user.following} Seguindo
        </Data>

        {user.company && (
          <Data>
            <MdWork size={20} />
            {user.company}
          </Data>
        )}

        {user.location && (
          <Data>
            <MdLocationCity size={20} />
            {user.location}
          </Data>
        )}
        {user.twitter_username && (
          <Data>
            <FaTwitter size={20} />
            <Link
              target="_blank"
              href={`https://twitter.com/${user.twitter_username}`}
            >
              {user.twitter_username}
            </Link>
          </Data>
        )}

        {user.blog && (
          <Data>
            <MdLink />
            <a href={`/${user.blog}`} target="_blank" rel="noopener noreferrer">
              {user.blog}
            </a>
          </Data>
        )}
      </Inner>
    </Container>
  );
};

export default Profile;
