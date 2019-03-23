import 'jest-styled-components';

import React from 'react';
import TestRenderer, { ReactTestRenderer } from 'react-test-renderer';
import { ThemeProvider } from 'src/Theme';

import { Column } from './Column';
import { Grid } from './Grid';

describe('Grid', () => {
  let renderer: ReactTestRenderer;

  afterEach(() => {
    if (renderer) {
      renderer.unmount();
    }
  });

  it.only('should render Grid with Columns', () => {
    renderer = TestRenderer.create(
      <ThemeProvider>
        <Grid>
          <Grid.Col sm={6} md={3}>
            column1
          </Grid.Col>
          {/* DIV & SPAN will get ignored */}
          <div />
          <span>column1.2</span>
          <Grid.Col sm={6} md={3}>
            column2
          </Grid.Col>
          <Grid.Col sm={6} md={3}>
            column3
          </Grid.Col>
          <Grid.Col sm={6} md={3}>
            column4
          </Grid.Col>
          {/* DIV will get ignored */}
          <div />
        </Grid>
      </ThemeProvider>,
    );

    const instance = renderer.root;
    const allColumnChildren = instance.findAll(node => node.type === Column);

    expect(allColumnChildren.length).toBe(4);
    expect(allColumnChildren[0].props.children).toBe('column1');
    expect(allColumnChildren[0].props.size).toEqual({
      xs: null,
      sm: 6,
      md: 3,
      lg: null,
      xl: null,
      xxl: null,
      size: null,
    });
    expect(allColumnChildren[0].props.allColumnSizes).toEqual({
      xs: [null, null, null, null],
      sm: [6, 6, 6, 6],
      md: [3, 3, 3, 3],
      lg: [null, null, null, null],
      xl: [null, null, null, null],
      xxl: [null, null, null, null],
      size: [null, null, null, null],
    });
    expect(allColumnChildren[1].props.children).toBe('column2');
    expect(allColumnChildren[2].props.children).toBe('column3');
    expect(allColumnChildren[3].props.children).toBe('column4');

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
