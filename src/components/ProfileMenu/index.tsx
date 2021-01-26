import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'
import Link from 'next/link'
import * as S from './styles'

const ProfileMenu = () => (
  <S.Nav>
    <Link href="/profile/me" passHref prefetch={false}>
      <S.Link>
        <AccountCircle size={24} />
        <span>My Profile</span>
      </S.Link>
    </Link>
    <Link href="/profile/cards" passHref prefetch={false}>
      <S.Link>
        <CreditCard size={24} />
        <span>My cards</span>
      </S.Link>
    </Link>
    <Link href="/profile/orders" passHref prefetch={false}>
      <S.Link>
        <FormatListBulleted size={24} />
        <span>My Orders</span>
      </S.Link>
    </Link>
    <Link href="/logout" passHref prefetch={false}>
      <S.Link>
        <ExitToApp size={24} />
        <span>Signout</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
