import './Menu.css'
const Submenu = ({ title, link, image, columns }) => {
    return (
        <li className="has-submenu">
            {image && <img src={image} alt={title} />}
            <a href={link} className="main-link">
                {title}
            </a>
            <div className="submenu-container">
                <div className="submenu-row">
                    {columns.map((column, index) => (
                        <div key={index} className="submenu-column">
                            <h3>{column.title}</h3>
                            <ul>
                                {column.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <a href={item.link} ><span className="submenu-item-color">{item.label}</span></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </li>
    )
}

export default Submenu