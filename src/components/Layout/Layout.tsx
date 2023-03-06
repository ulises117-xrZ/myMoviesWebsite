import React from 'react';
export interface LayoutProps {
	children: React.ReactNode;
}

const Layout : React.FC<LayoutProps> = ({children}) => {
	return <div className='layout'>{children}</div>;
};

export default Layout;
