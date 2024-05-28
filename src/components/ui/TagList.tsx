import { TagListProps } from "../../assets/types";

function TagList({ tags }: TagListProps): JSX.Element {
     return (
          <ul className="ul-tags">
               {tags.map((tag: string) => (
                    <li className="li-tag" key={tag}>
                         <div className="tag">{tag}</div>
                    </li>
               ))}
          </ul>
     );
}

export default TagList;
