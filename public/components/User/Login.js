// @ts-nocheck

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        console.log(form, data);
        // for (let name of data.keys()) {
        //     const input = form.elements[name];
        // }

        await fetch('/api', {
            method: 'POST',
            body: data
        });
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form method="POST" action="/api"> {/* onSubmit={this.handleSubmit} */}
                    <label> Username <br/>
                        <input 
                            type="text"
                            name="username"
                            required
                            // value={this.state.username}
                            // onChange={this.handleChange} 
                        />
                    </label>
                    <br/>
                    <label> Password <br/>
                        <input 
                            type="password"
                            name="password"
                            required
                            // value={this.state.password}
                            // onChange={this.handleChange} 
                        />  
                    </label>

                    <br/>
                    <button>Log In</button>
                </form>
                <br/>
                <button>Forgot your password?</button>
            </div>
        );
    }
}

// function Login(props) {
//     const []
//     return (
//         <div>
//             <form>
                
//             </form>
//         </div>
//     );
// } 