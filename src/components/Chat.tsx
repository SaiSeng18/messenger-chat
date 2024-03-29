import { FacebookProvider, CustomChat } from "react-facebook";

export const Chat = () => {
	return (
		<FacebookProvider appId="783593293458895" chatSupport>
			<CustomChat pageId="108999731882727" minimized={true} />
		</FacebookProvider>
	);
};
