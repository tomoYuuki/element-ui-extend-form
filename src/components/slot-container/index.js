export default {
    name: 'slot-container',
    functional: true,
    props: {
        render: Function,
        data: Object
    },
    render: (h, ctx) => {
        return ctx.props.render(h, ctx.props.data)
    }
}