import { ArrowRightOutlined } from "@ant-design/icons";
import "./UIButton.scss"

interface UIButtonProps {
    buttonName?: string;
    buttonClass?: string;
    handleClick?: () => void;
}

const UIButton = (props: UIButtonProps) => {
    const { buttonName = "", buttonClass = "", handleClick } = props;

    return <div className="ui-button">
        <button className="ui-button-container" onClick={handleClick}>
            <div className="ui-button-container-inner">
                <span className="button-name">{buttonName}</span>
                <span className="button-icon"><ArrowRightOutlined /></span>
            </div>
        </button>
    </div>
}

export default UIButton;