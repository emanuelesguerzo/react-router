import { NavLink } from "react-router-dom";

function MainNav() {
    const paths = [
        {
            path: "/",
            title: "Home",
        },
        {
            path: "/posts",
            title: "Posts",
        },
        {
            path: "/about",
            title: "About",
        },
    ]

    return (
        <nav>
            <ul>
                {paths.map((curItem) => (
                    <li>
                        <NavLink to={curItem.path}>{curItem.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default MainNav;