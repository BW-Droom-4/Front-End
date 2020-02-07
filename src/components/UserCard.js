import React from 'react';
import styled from 'styled-components';

const StyledUserCard = styled.div`
    height: 100%;
    display: grid;
    place-items: center;
    padding: 2rem;
    h2 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    p {
        padding-bottom: 0.3rem;
    }
    .occupation {
        font-weight: bold;
    }
`;

const UserCard = ({ user }) => {
    return user.profile ? (
        <StyledUserCard>
            <div>
                <h2>{user.firstname + ' ' + user.lastname}</h2>
                <p className="occupation">{user.profile.occupation_title}</p>
                <p className="experience">Years of experience: {user.profile.years_of_experience}</p>
                <p className="about">{user.profile.about_user}</p>
            </div>
        </StyledUserCard>
    ) : null;
};

export default UserCard;
