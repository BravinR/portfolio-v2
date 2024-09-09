export const BlogTag = (props: { name: string }) => {
	return <span className={`rounded-md bg-gray-600 px-2 py-0.5 text-sm`}>{props.name}</span>;
};