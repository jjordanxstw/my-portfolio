export default function Loading() {
	return (
		<>
			<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30">
				<div className="float-container animate-float">
					<div className="cube w-10 h-10 relative">
						<div className="cube-face cube-face--front bg-[#0d0a1c]"></div>
						<div className="cube-face cube-face--back bg-[#201a47]"></div>
						<div className="cube-face cube-face--left bg-[#332971]"></div>
						<div className="cube-face cube-face--right bg-[#46399c]"></div>
						<div className="cube-face cube-face--top bg-[#5948c6]"></div>
						<div className="cube-face cube-face--bottom bg-[#6c58f1]"></div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.cube {
					transform-style: preserve-3d;
					animation: spinCube 2s infinite linear;
				}

				.float-container {
					animation: float 2s ease-in-out infinite;
				}

				.cube-face {
					position: absolute;
					width: 100%;
					height: 100%;
					opacity: 0.95;
					border: 1px solid rgba(255, 255, 255, 0.3); /* ขอบบางขาวจาง */
				}

				.cube-face--front {
					transform: translateZ(20px);
				}
				.cube-face--back {
					transform: rotateY(180deg) translateZ(20px);
				}
				.cube-face--left {
					transform: rotateY(-90deg) translateZ(20px);
				}
				.cube-face--right {
					transform: rotateY(90deg) translateZ(20px);
				}
				.cube-face--top {
					transform: rotateX(90deg) translateZ(20px);
				}
				.cube-face--bottom {
					transform: rotateX(-90deg) translateZ(20px);
				}

				@keyframes spinCube {
					0% {
						transform: rotateX(0deg) rotateY(0deg);
					}
					100% {
						transform: rotateX(360deg) rotateY(360deg);
					}
				}

				@keyframes float {
					0%, 100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-20px);
					}
				}

				@keyframes shadowPulse {
					0%, 100% {
						transform: scale(1);
						opacity: 0.4;
					}
					50% {
						transform: scale(0.8);
						opacity: 0.1;
					}
				}

				.shadow-container {
					transform-origin: center;
				}
			`}</style>
		</>
	);
}
