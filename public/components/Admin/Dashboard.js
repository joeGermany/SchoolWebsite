// @ts-nocheck

class AdminDashboard extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <input type="checkbox" id="check" />

                <header>
                    <label htmlFor="check">
                        <i className="fas fa-bars" id="sidebar_btn"></i>
                    </label>
                </header>

                <div className="sidebar">
                    <center>
                        <img src="1.png" className="profile_image" alt="" />
                        <h4>Jessica</h4>
                    </center>
                    <a href="#"><i className="fas fa-desktop"></i><span>Dashboard</span></a>
                    <a href="#"><i className="fas fa-cogs"></i><span>Components</span></a>
                    <a href="#"><i className="fas fa-table"></i><span>Tables</span></a>
                    <a href="#"><i className="fas fa-th"></i><span>Forms</span></a>
                    <a href="#"><i className="fas fa-info-circle"></i><span>About</span></a>
                    <a href="#"><i className="fas fa-sliders-h"></i><span>Settings</span></a>
                </div>

                <div className="content"></div>
            </div>
            
        );
    }
} 