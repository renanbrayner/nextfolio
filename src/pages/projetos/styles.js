import styled from 'styled-components'

const Container = styled.div`

	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;

	.grid {
		display: grid;
		width: 50%;
		height: 100%;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		z-index: 2;

		.project {
			height: 100%;
			width: 100%;
			object-fit: cover;
			cursor: pointer;
			filter: opacity(0.8) grayscale(0.98);
			transition: filter 200ms ease-in;
			background-color: ${props => props.theme.colors.background}; 

			:hover {
					filter: opacity(1) grayscale(0);
			}

		}

		.project:nth-child(1),
		.project:nth-child(4),
		.project:nth-child(5) {
			background-color: ${props => props.theme.colors.backgroundAlt};
		}

	}

	.selected {
		position: relative;
		width: 50%;
		transition: width 400ms ease-in-out;
		height: 100%;
		background-color: ${props => props.theme.colors.background}; 

		:hover {
				width: 85%;
		}

		.big {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}

		.text-container {
			position: absolute;
			padding: 0 1.5rem 2rem 1.5rem;
			opacity: 0.85;
			bottom: 0px;
			width: 100%;
			height: 33.3%;
			padding-top: 5%;
			background-color: ${props => props.theme.colors.background};
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.buttons {
				width: 100%;
				display: flex;
				justify-content: space-between;

				.repo {
					margin-right: auto;
					border-radius: 8px;
				}

				a {
					border-radius: 8px;
					background-color: ${props => props.theme.colors.backgroundAlt};
					padding: 12px 0;
					width: 49%;
					text-align: center;
					transition: background-color 200ms;
					font-weight: bold;

					:hover {
						background-color: ${props => props.theme.colors.backgroundHighlight};
						color: ${props => props.theme.colors.primary}
					}

				}
			}
		}

		@media (max-width: 1024px) {

			.text-container {

				.title {
					font-size: 1.4rem;
				}

				.text {
					font-size: 0.9rem; 
				}

				.buttons {

					a {
						padding: 6px 0;
						font-size: 0.9rem;
					}

				}

			}
		}
	}

	@media (max-width: 768px) {
		flex-direction: column-reverse;
		padding-bottom: 4rem;

		.grid {
			width: 100%;
			height: 50%;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr;
		}

		.selected{
			width: 100%;
			height: 50%;

			.text-container {
				position: absolute;
				opacity: 0.9;
				width: 100%;
				height: 50%;
				box-shadow: 0px -10px 50px 50px ${props => props.theme.colors.background};
				background-color: ${props => props.theme.colors.background};
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

		}
	}
`

export default Container
