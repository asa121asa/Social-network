import usersReducer, {folowAC, setUsersAC, unFolowAC, UsersPageType} from "./users-reduser";
import {UsersType} from "../components/users/Users";

test('folowAC',()=>{

    const startState: UsersPageType={
        users:[{
            name: 'SA',

            id: "2502",
            followed: false,
            uniqueUrlName: null,
            status: "is active",
            photos: {
                small: "string",
                large: "string"
            },
            location: {
                contry: "UAE",
                city: "DUMAI"
            },
        } ],
        currentPage: 1,
        pageSize:2,
        totalUsersCount:20
    }

    const action =folowAC("2502")
    const endState=usersReducer(startState, action )

    expect(endState.users[0].followed).toBe(true)


})
test('unFolowAC',()=>{

    const startState: UsersPageType={
        users:[{
            name: 'SA',

            id: "2502",
            followed: false,
            uniqueUrlName: null,
            status: "is active",
            photos: {
                small: "string",
                large: "string"
            },
            location: {
                contry: "UAE",
                city: "DUMAI"
            },
        } ],
        currentPage: 1,
        pageSize:2,
        totalUsersCount:20
    }

    const action =unFolowAC("2502")
    const endState=usersReducer(startState, action )

    expect(endState.users[0].followed).toBe(false)


})
test('SETUSERS',()=>{

    const startState:UsersPageType={
        users:[{
            name: 'SA',
            id: "2502",
            followed: true,
            uniqueUrlName: null,
            status: "is active",
            photos: {
                small: "string",
                large: "string"
            },
            location: {
                contry: "UAE",
                city: "DUMAI"
            },
        } ],
        totalUsersCount: 10,
        pageSize: 1,
        currentPage:1,
    }
    const newState: Array<UsersType> = [{

        name: 'Frank',
        id: "0704",
        followed: true,
        uniqueUrlName: null,
        status: "is active",
        photos: {
            small: "string",
            large: "string"
        },
        location: {
            contry: "BLR",
            city: "Minsk"
        }
    }]



    const action =setUsersAC(newState)
    const endState=usersReducer(startState, action )
    expect(startState.users.length).toBe(1)

    expect(endState.users[0].name).toBe('Frank')
/*    expect(endState.users[1].name).toBe('SA')*/
    expect(endState.users.length).toBe(1)




})