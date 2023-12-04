import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="copyright">
                    Copyright &copy; {new Date().getFullYear()} - The Bastion
                    Bot Project - Modified by Visual Team
                </div>
            </footer>
        );
    }
}

export default Footer;
