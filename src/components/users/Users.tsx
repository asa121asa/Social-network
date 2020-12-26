import React from 'react';
import s from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";
import {userApi} from "../../api/api";


export type UsersType = {
    name: string
    id: string
    followed: boolean
    uniqueUrlName: null | string
    status: string | null
    photos: {
        small: string | null,
        large: string | null
    }
    location: {
        contry: string
        city: string
    }
}

export type UsersPropsType = {
    users: Array<UsersType>
    follow: (userid: string) => void
    UnFollow: (userid: string) => void
    setUsers: (users: Array<UsersType>) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
}


function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {
                pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? s.selectedPage : ""}
                                 onClick={(e) => {props.onPageChanged(p)
                                       }}>{p}</span>
                })}
        </div>

        {
            props.users.map(u =>  <div key={u.id}>

  <span>
            <div>
                       <NavLink to={'/profile/' + u.id}>
                       <img alt={'photo'} src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
                       </NavLink>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                           userApi.getUnFollow(+u.id)
                                .then((data) => {
                                    if (data.resultCode === 0) {
                                        props.UnFollow(u.id)}})

                        }}>unfollow</button>

                        : <button onClick={() => {
                            userApi.getFollow(+u.id)
                                .then((data) => {if (data.resultCode === 0) {
                                        props.follow(u.id)}})

                        }}>follow</button>}
                </div>
            </div>
   </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                   <div>{"u.location.contry"}</div>
                   <div>{"u.location.city"}</div>
               </span>
            </span>
            </div>)
        }


    </div>;


}


export default Users