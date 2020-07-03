import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Clipboard = () => {
  const [clipboard, setClipboard] = useState({
    value: '',
    copied: false
  });

  const onChangeInputValue = event => {
    setClipboard({
      value: event.target.value,
      copied: false
    });
  };

  return (
    <div>
      <input value={clipboard.value} onChange={onChangeInputValue} />

      <CopyToClipboard
        text={clipboard.value}
        onCopy={() => setClipboard({ ...clipboard, copied: true })}
      >
        <button disabled={clipboard.copied}>Copy to clipboard</button>
      </CopyToClipboard>
      <div
        style={{
          height: '30px'
        }}
      >
        {clipboard.copied ? (
          <span style={{ color: 'green' }}>Copied!</span>
        ) : null}
      </div>
    </div>
  );
};

export default Clipboard;
