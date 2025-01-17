import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <span className="search-icon" onClick={() => alert('Search clicked!')}>🔍</span>
            </div>
            <div className="tree-view">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;