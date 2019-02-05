import { Component } from 'react';

interface HeadTitleProps {
  suffix?: string;
  title?: string;
}

export class HeadTitle extends Component<HeadTitleProps> {
  componentDidMount() {
    const { title, suffix = 'DMotivation' } = this.props;
    const head: HTMLTitleElement | null = document.querySelector('head title');
    if (head) {
      head.textContent = title ? `${title} - ${suffix}` : suffix;
    }
  }
  render() {
    return null;
  }
}
