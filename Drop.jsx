import { ClassNames } from '@emotion/react';
import React from 'react'
import {ButtonToolbar, SelectPicker} from 'rsuite';

const Discount = () => {
    const [placement, setPlacement] = React.useState('topCenter');
  
  return (
    <div>
      <ButtonToolbar>
        <SelectPicker
        className='p-2'
          cleanable={false}
          value={placement}
          data={[
            { label: 'All Categories', value: '' },
            { label: 'topLeft', value: 'topLeft' },
            { label: 'topRight', value: 'topRight' },
            { label: 'bottomLeft', value: 'bottomLeft' },
            { label: 'bottomRight', value: 'bottomRight' },
            { label: 'topStart', value: 'topStart' },
            { label: 'topCenter', value: 'topCenter' },
            { label: 'topEnd', value: 'topEnd' },
            { label: 'bottomStart', value: 'bottomStart' },
            { label: 'bottomCenter', value: 'bottomCenter' },
            { label: 'bottomEnd', value: 'bottomEnd' }
          ]}
          onChange={setPlacement}
          style={{ width:200, }}
        />
      </ButtonToolbar>
    </div>
  )
}

export default Discount