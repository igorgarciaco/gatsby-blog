import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'

const Profile = () => {
    const {
        site: {
            siteMetadata: { title, role, description, author },
        },
    } = useStaticQuery(graphql`
    query MySiteMetadata {
        site {
            siteMetadata {
                title
                description
                author
                role
                }
            }
        }
    `)

    return (
        <div className="profile-wrapper">
        <Avatar />
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h3>{role}</h3>
        <p>{description}</p>
    </div>
    )
}

export default Profile