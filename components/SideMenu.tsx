import suggestions from "@/_mock/suggestions";

const SideMenu = () => {
    return (
        <div className="side-bar-list">
            {suggestions.map(({ heading, descriptions }, index) => (
                <div className="head-dis-main-box" key={index}>
                    <div className="heading">
                        <h3>{heading}</h3>
                        {descriptions.map(({ href, desc }, indx) => (
                            <div className="dis" key={indx}>
                                <a href={href}>{desc}</a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideMenu;