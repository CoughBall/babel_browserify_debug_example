'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Square(props) {
  return _react2.default.createElement(
    'button',
    { className: 'square', onClick: props.onClick },
    props.value
  );
}

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

    _this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
    return _this;
  }

  _createClass(Board, [{
    key: 'handleCLick',
    value: function handleCLick(i) {
      var squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({ squares: squares,
        xIsNext: !this.state.xIsNext
      });
    }
  }, {
    key: 'renderSquare',
    value: function renderSquare(i) {
      var _this2 = this;

      return _react2.default.createElement(Square, {
        value: this.state.squares[i],
        onClick: function onClick() {
          return _this2.handleCLick(i);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var status = 'Next player: ' + (this.setState.xIsNext ? 'X' : 'O');
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'status' },
          status
        ),
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(0),
          this.renderSquare(1),
          this.renderSquare(2)
        ),
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(3),
          this.renderSquare(4),
          this.renderSquare(5)
        ),
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(6),
          this.renderSquare(7),
          this.renderSquare(8)
        )
      );
    }
  }]);

  return Board;
}(_react2.default.Component);

var Game = function (_React$Component2) {
  _inherits(Game, _React$Component2);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
  }

  _createClass(Game, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'game' },
        _react2.default.createElement(
          'div',
          { className: 'game-board' },
          _react2.default.createElement(Board, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'game-info' },
          _react2.default.createElement('div', null),
          _react2.default.createElement('ol', null)
        )
      );
    }
  }]);

  return Game;
}(_react2.default.Component);

// ========================================

_reactDom2.default.render(_react2.default.createElement(Game, null), document.getElementById('root'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXNCO0FBQ3BCLFNBQ0k7QUFBQTtBQUFBLE1BQVEsV0FBVSxRQUFsQixFQUEyQixTQUFZLE1BQU0sT0FBN0M7QUFDRyxVQUFNO0FBRFQsR0FESjtBQUtEOztJQUVLLEs7OztBQUNKLGlCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw4R0FDVixLQURVOztBQUVoQixVQUFLLEtBQUwsR0FBYTtBQUNYLGVBQVMsTUFBTSxDQUFOLEVBQVMsSUFBVCxDQUFjLElBQWQsQ0FERTtBQUVYLGVBQVM7QUFGRSxLQUFiO0FBRmdCO0FBTWpCOzs7O2dDQUVXLEMsRUFBRTtBQUNaLFVBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLEtBQW5CLEVBQWQ7QUFDQSxjQUFRLENBQVIsSUFBYSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLEdBQXJCLEdBQTJCLEdBQXhDO0FBQ0EsV0FBSyxRQUFMLENBQWMsRUFBQyxTQUFTLE9BQVY7QUFDWixpQkFBUyxDQUFDLEtBQUssS0FBTCxDQUFXO0FBRFQsT0FBZDtBQUdEOzs7aUNBRVksQyxFQUFHO0FBQUE7O0FBQ2QsYUFDSSw4QkFBQyxNQUFEO0FBQ0UsZUFBUSxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLENBQW5CLENBRFY7QUFFRSxpQkFBVztBQUFBLGlCQUFPLE9BQUssV0FBTCxDQUFpQixDQUFqQixDQUFQO0FBQUE7QUFGYixRQURKO0FBTUQ7Ozs2QkFFUTtBQUNQLFVBQUksU0FBUyxtQkFBbUIsS0FBSyxRQUFMLENBQWMsT0FBZCxHQUF3QixHQUF4QixHQUE4QixHQUFqRCxDQUFiO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFBeUI7QUFBekIsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZjtBQUNHLGVBQUssWUFBTCxDQUFrQixDQUFsQixDQURIO0FBRUcsZUFBSyxZQUFMLENBQWtCLENBQWxCLENBRkg7QUFHRyxlQUFLLFlBQUwsQ0FBa0IsQ0FBbEI7QUFISCxTQUZGO0FBT0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0csZUFBSyxZQUFMLENBQWtCLENBQWxCLENBREg7QUFFRyxlQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FGSDtBQUdHLGVBQUssWUFBTCxDQUFrQixDQUFsQjtBQUhILFNBUEY7QUFZRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFdBQWY7QUFDRyxlQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FESDtBQUVHLGVBQUssWUFBTCxDQUFrQixDQUFsQixDQUZIO0FBR0csZUFBSyxZQUFMLENBQWtCLENBQWxCO0FBSEg7QUFaRixPQURGO0FBb0JEOzs7O0VBaERpQixnQkFBTSxTOztJQW1EcEIsSTs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFLHdDQUFDLEtBQUQ7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0Usb0RBREY7QUFFRTtBQUZGO0FBSkYsT0FERjtBQVdEOzs7O0VBYmdCLGdCQUFNLFM7O0FBZ0J6Qjs7QUFFQSxtQkFBUyxNQUFULENBQ0UsOEJBQUMsSUFBRCxPQURGLEVBRUUsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBRkYiLCJmaWxlIjoicmVhY3QuYmFiZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmZ1bmN0aW9uIFNxdWFyZShwcm9wcyl7XG4gIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNxdWFyZVwiIG9uQ2xpY2sgPSB7IHByb3BzLm9uQ2xpY2sgfT5cbiAgICAgICAge3Byb3BzLnZhbHVlfVxuICAgICAgPC9idXR0b24+XG4gIClcbn1cblxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzcXVhcmVzOiBBcnJheSg5KS5maWxsKG51bGwpLFxuICAgICAgeElzTmV4dDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDTGljayhpKXtcbiAgICBsZXQgc3F1YXJlcyA9IHRoaXMuc3RhdGUuc3F1YXJlcy5zbGljZSgpOyBcbiAgICBzcXVhcmVzW2ldID0gdGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nO1xuICAgIHRoaXMuc2V0U3RhdGUoe3NxdWFyZXM6IHNxdWFyZXMsXG4gICAgICB4SXNOZXh0OiAhdGhpcy5zdGF0ZS54SXNOZXh0XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJTcXVhcmUoaSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTcXVhcmUgXG4gICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLnNxdWFyZXNbaV0gfVxuICAgICAgICAgIG9uQ2xpY2sgPSB7KCkgPT4gKHRoaXMuaGFuZGxlQ0xpY2soaSkpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3RhdHVzID0gJ05leHQgcGxheWVyOiAnICsgKHRoaXMuc2V0U3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzXCI+e3N0YXR1c308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDEpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgyKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDMpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg0KX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg2KX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNyl9XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1ib2FyZFwiPlxuICAgICAgICAgIDxCb2FyZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWluZm9cIj5cbiAgICAgICAgICA8ZGl2PnsvKiBzdGF0dXMgKi99PC9kaXY+XG4gICAgICAgICAgPG9sPnsvKiBUT0RPICovfTwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEdhbWUgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il19