import { useNavigate } from "react-router-dom";

function NavItem(props) {

    const navigate = useNavigate();

    return (
        <li className="nav-item">
            <a class="nav-link" style={{ cursor: 'pointer' }} onClick={e => navigate(props.href)} href>{props.label}</a>
        </li>
    )
}

export default NavItem;