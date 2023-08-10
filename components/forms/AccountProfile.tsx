interface Props {
    user: {
        id: string | undefined,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string,
    },
    btnTitle: string
}

const AccountProfile = ({user, btnTitle}: Props) => {

    return (
        <div>AccountProfile</div>
    )
}

export default AccountProfile;