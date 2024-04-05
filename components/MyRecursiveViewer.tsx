import { SxProps } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export default function MyRecursiveViewer({ object, sx }: { object: object; sx: SxProps }) {
  return <SimpleTreeView sx={sx}>{recursiveList(object)}</SimpleTreeView>;
}

function recursiveList(object: any, parentKey: string = '') {
  if (typeof object === 'object' && object) {
    return Object.entries(object).map(([key, value]) => {
      const completeKey = (parentKey ? parentKey + ' > ' : '') + key;

      return (
        <TreeItem
          key={parentKey + key}
          title={completeKey}
          itemId={parentKey + key}
          label={
            <>
              <b>{key}</b>
              {typeof value === 'object' ? '' : ` ${value}`}
            </>
          }
        >
          {recursiveList(value, completeKey)}
        </TreeItem>
      );
    });
  }

  return null;
}
