import React from 'react';
import { Button, HeadTitle } from '../../Pages/+Shared';

export const Buttons = () => (
  <div>
    <HeadTitle title="Styleguide" />
    <div style={{ padding: '2em', backgroundColor: '#7C82DF' }}>
      <Button text="button default" />
      <Button text="button primary" variant="primary" />
      <Button text="button secondary" variant="secondary" />
    </div>
    <div style={{ padding: '2em' }}>
      <Button text="button default outline" variant="default-outline" />
      <Button text="button secondary" variant="secondary" />
    </div>
  </div>
);
