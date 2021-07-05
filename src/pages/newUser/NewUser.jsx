import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="Nurbek" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Abduhamidov Nurbek" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="nurbek@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                    </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+998 93 401 04 03" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="NAMANGAN" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">

                    <input type="radio" name="gender" id="male" value="Male"/>
                    <label for="Male">Male</label>

                    <input type="radio" name="gender" id="female" value="Male"/>
                    <label for="FeMale">Female</label>

                    <input type="radio" name="gender" id="other" value="Male"/>
                    <label for="others">Others</label>
                    </div>
                    <div className="newUserItem">
                        <label>Active</label>
                        <select className="newUserSelector" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button className="newUserButton">Create</button>
                </div>
            </form>
        </div>
    )
}
