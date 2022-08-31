import { Tag } from '../';
import { ITag } from '../../@types/todo';

interface TagsProps {
  tags: ITag[];
}

function Tags({ tags }: TagsProps) {
  return (
    <>
      {tags.map((tag) => (
        <Tag key={tag.id} label={tag.tagName} id={tag.id} />
      ))}
    </>
  );
}

export default Tags;
