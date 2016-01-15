/**
 * @file
 * @author jinguangguo
 * @date 2016/1/15
 */

let TEXTS = [
    {
        txt: '开学季新装备'
    },
    {
        txt: '精品课程大促销'
    }
];

export class Text extends React.createClass {

    constructor(props) {
        super(props);
        this.state = {};
    }

    tick() {
        this.setState({
            name: 'king'
        });
    }

    render() {
        var items = [];

        _.forEach(TEXTS, function(text, index) {
            items.push(
                <li className="item">
                    <a href="javascript:;" title={text.txt} className="item-link">
                        {text.txt}
                    </a>
                </li>
            );
        });

        return (
            <ul className="widget-show-text">
                {items}
            </ul>
        );
    }
}
