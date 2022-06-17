import { useState } from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu,
} from "reactstrap";
import styled from "styled-components";

export type DropdownItemType = {
	id: number;
	name: string;
};

type Props = {
	options: DropdownItemType[];
	callback?: (id: number) => void;
	default: number;
};

const StyledDropdownContainer = styled(Dropdown)`
	display: inline-block;
`;

const StyledToggle = styled(DropdownToggle)`
	box-shadow: none !important;
	justify-content: space-between;
	background-color: transparent;
	color: #252525;
	border: 1px solid #ebebeb;
	padding: 5px;
	border-radius: 4px;

	&:hover {
		color: #252525;
		background-color: #f5f5f5;
		box-shadow: 0 4px 7px 0 rgba(218, 220, 230, 0.6);
		border: 1px solid #ebebeb;
	}

	.label {
		display: inline-block;
		min-width: 110px;
		font-size: 15px;
	}
`;

const StyledMenu = styled(DropdownMenu)``;
const StyledItem = styled(DropdownItem)`
	&:focus {
		background-color: #fc8019;
	}
`;

const StyledDropdown = (props: Props) => {
	const [isOpen, setOpen] = useState(false);
	const [label, setLabel] = useState<string>(
		props.options.filter((item) => item.id === props.default)[0].name
	);

	return (
		<StyledDropdownContainer
			isOpen={isOpen}
			toggle={() => setOpen(!isOpen)}
		>
			<StyledToggle caret data-toggle="dropdown" tag="span">
				<div className="label">{label}</div>
			</StyledToggle>
			<StyledMenu>
				{props.options.map((item, idx) => {
					return (
						<StyledItem
							key={idx}
							onClick={() => {
								setLabel(item.name);
								props.callback?.(item.id);
							}}
						>
							{item.name}
						</StyledItem>
					);
				})}
			</StyledMenu>
		</StyledDropdownContainer>
	);
};

export default StyledDropdown;
