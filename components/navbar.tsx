import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Avatar, AvatarBadge, AvatarGroup, Stack, WrapItem,Box
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Logo from 'public/logo.png';
import Image from 'next/image';
import style from './navbar.module.css';
import Link from 'next/link';


const Navbar = () => {
    return (
        <>
        
        <Box className={style.navbar}>
        <Box>
            <Image width={100} height={100} src={Logo} alt='....' />
        </Box>
            <Menu>
                <Box >
                <Stack direction='row' spacing={4} className={style.sidemenu}>
                    <Avatar>
                        <WrapItem>
                        <Avatar  name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        </WrapItem>
                        <AvatarBadge boxSize='1.25em' bg='green.500' />
                    </Avatar>
                    <MenuButton>
                    Actions <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
                <MenuButton>
                    Blog
                </MenuButton>
                <MenuButton>
                    Videos
                </MenuButton>
                <MenuButton>
                <Link href='/chat'>
                 ChatGPT
                </Link>
                </MenuButton>
                </Stack>
                </Box>
            </Menu>
            </Box>
        </>
    )
}

export default Navbar;