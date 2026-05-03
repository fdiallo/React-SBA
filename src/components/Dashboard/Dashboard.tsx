interface User{
    id: number,
    name: string,
    email: string
}

interface UserProps{
    user: User
}

const users: User[] =[
    {
    id: 0,
    name: "Paul",
    email: "PaulIsReallyRad@perscholas.org"
},
    {
    id: 1,
    name: "Quinn",
    email: "QuinnTriesHard@perscholas.org"
},
    {
    id: 2,
    name: "Ta'Ron",
    email: "SeniorDev@taron.biz"
},
    {
    id: 3,
    name: "Jasmine",
    email: "SeniorDev@jasmine.biz"
},
]

function UserProfileCard({user}: UserProps ){
    return(
        <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        </div>
    )
}

function UserList(){
    const usersElements = users.map((user) => <UserProfileCard key={user.id} user={user}/>

    )
 return(
    <>
    <h1>UserList</h1>
    {usersElements}
    </>
 )
}

export default UserList