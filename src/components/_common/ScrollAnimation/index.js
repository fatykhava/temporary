import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Waypoint } from "react-waypoint";

import "./style.scss";

export default class ScrollAnimation extends Component {
  state = {
    isReach: false,
  };

  static propTypes = {
    children: PropTypes.node,
    tag: PropTypes.string,
    className: PropTypes.string,
    effect: PropTypes.string.isRequired,
    duration: PropTypes.number,
    delay: PropTypes.number,
    isEaseOut: PropTypes.bool,
  };

  static defaultProps = {
    tag: "div",
    duration: 1000,
    delay: 0,
  };

  handleWaypointEnter = () => {
    const { isReach } = this.state;
    !isReach && this.setState({ isReach: true });
  };

  render() {
    const {
      children,
      tag: Tag,
      className,
      effect,
      duration,
      delay,
      isEaseOut,
    } = this.props;
    const { isReach } = this.state;
    return (
      <Waypoint bottomOffset="5%" onEnter={this.handleWaypointEnter}>
        <Tag
          className={cn(className, "ScrollAnimation")}
          style={
            isReach
              ? {
                  animation: `${effect} ${duration}ms ${
                    isEaseOut
                      ? "cubic-bezier(0, 0, 0.2, 1)"
                      : "cubic-bezier(0.4, 0, 0.2, 1)"
                  } ${delay}ms both`,
                }
              : null
          }
        >
          {children}
        </Tag>
      </Waypoint>
    );
  }
}
