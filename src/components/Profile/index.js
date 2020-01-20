import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import * as S from './styled'

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
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar />
                <S.ProfileAuthor>
                    {author}
                    <S.ProfileRole>{role}</S.ProfileRole>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile