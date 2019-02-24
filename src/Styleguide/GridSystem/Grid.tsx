import React from 'react';
import { Grid } from 'src/UI-Kits';
import { HeadTitle } from 'src/+Shared';
import { StyledGridSystemContainer } from './Grid.styled';

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
  when an unknown printer took a galley of type and scrambled it to make a type \
  specimen book.It has survived not only five centuries, but also the leap into \
  electronic typesetting, remaining essentially unchanged.It was popularised in \
  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, \
  and more recently with desktop publishing software like Aldus PageMaker \
  including versions of Lorem Ipsum.";

export const GridSystem = () => (
  <StyledGridSystemContainer>
    <HeadTitle title="Grid System" />
    <p>
      The grid system is pretty generic and it's based on 12 columns, if you don't set the size
      property of the col component then it will get equally divided
    </p>
    <Grid>
      <Grid.Col>
        <h3>1/1</h3>
        <p>{lorem}</p>
      </Grid.Col>
    </Grid>

    <Grid>
      <Grid.Col>
        <h3>1/2</h3>
        <p>{lorem}</p>
      </Grid.Col>
      <Grid.Col>
        <h3>2/2</h3>
        <p>{lorem}</p>
      </Grid.Col>
    </Grid>

    <Grid>
      <Grid.Col size={8}>
        <h3>2/3</h3>
        <p>{lorem}</p>
      </Grid.Col>
      <Grid.Col>
        <h3>1/3</h3>
        <p>{lorem}</p>
      </Grid.Col>
    </Grid>

    <Grid>
      <Grid.Col size={6}>
        <h3>1.5/3</h3>
        <p>{lorem}</p>
      </Grid.Col>
      <Grid.Col>
        <h3>0.75/3</h3>
        <p>{lorem}</p>
      </Grid.Col>
      <Grid.Col>
        <h3>0.75/3</h3>
        <p>{lorem}</p>
      </Grid.Col>
    </Grid>

    <Grid>
      <Grid.Col>
        <h3>1.25/3</h3>
        <p>{lorem}</p>
      </Grid.Col>
      <Grid.Col size={2}>
        <h3>0.5/3</h3>
        <p>{lorem}</p>
      </Grid.Col>
      <Grid.Col>
        <h3>1.25/3</h3>
        <p>{lorem}</p>
      </Grid.Col>
    </Grid>

    <Grid>
      <Grid.Col size={2}>
        <h3>0.66/4</h3>
        <p>{lorem}</p>
      </Grid.Col>
      <Grid.Col>
        <h3>1.14/4</h3>
        <p>{lorem}</p>
      </Grid.Col>
      <Grid.Col>
        <h3>1.14/4</h3>
        <p>{lorem}</p>
      </Grid.Col>
      <Grid.Col>
        <h3>1.14/4</h3>
        <p>{lorem}</p>
      </Grid.Col>
    </Grid>
  </StyledGridSystemContainer>
);
