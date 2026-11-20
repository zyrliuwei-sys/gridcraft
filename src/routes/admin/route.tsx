import { useState } from 'react';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import {
  BadgeCheck,
  CreditCard,
  FolderOpen,
  Home,
  LayoutDashboard,
  LogOut,
  Radar,
  Settings,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { toast } from 'sonner';

import { signOut } from '@/core/auth/client';
import { envConfigs } from '@/config';
import { m } from '@/paraglide/messages.js';
import { localizeHref } from '@/paraglide/runtime.js';
import { useUserPermissions } from '@/hooks/use-user-permissions';
import { AppLayout } from '@/components/app-layout';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/admin')({
  head: () => ({ meta: [{ name: 'robots', content: 'noindex,nofollow' }] }),
  component: AdminLayout,
});

function AdminSignOut() {
  const [pending, setPending] = useState(false);

  async function handleSignOut() {
    setPending(true);
    try {
      const { error } = await signOut();
      if (error) {
        toast.error(m['common.error.message']());
        return;
      }
      window.location.replace(localizeHref('/'));
    } catch {
      toast.error(m['common.error.message']());
    } finally {
      setPending(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      disabled={pending}
      onClick={handleSignOut}
    >
      <LogOut aria-hidden="true" />
      {m['common.sign.sign_out_title']()}
    </Button>
  );
}

function AdminLayout() {
  const group = m['common.systems.admin']();
  // Footer badges are super-admin only (the API enforces `*`); hide the
  // entry from regular admins instead of showing a page that 403s.
  const { data: permissions } = useUserPermissions();
  const navItems = [
    {
      href: '/admin',
      label: m['admin.nav.overview'](),
      icon: LayoutDashboard,
      group,
    },
    {
      href: '/admin/funnel',
      label: m['admin.nav.funnel'](),
      icon: TrendingUp,
      group,
    },
    {
      href: '/admin/users',
      label: m['admin.nav.rbac'](),
      icon: Shield,
      group,
      items: [
        { href: '/admin/users', label: m['admin.nav.users']() },
        { href: '/admin/invite-codes', label: m['admin.nav.invite_codes']() },
        { href: '/admin/roles', label: m['admin.nav.roles']() },
        { href: '/admin/permissions', label: m['admin.nav.permissions']() },
      ],
    },
    {
      href: '/admin/payments',
      label: m['admin.nav.billing'](),
      icon: CreditCard,
      group,
      items: [
        { href: '/admin/payments', label: m['admin.nav.payments']() },
        { href: '/admin/subscriptions', label: m['admin.nav.subscriptions']() },
        { href: '/admin/credits', label: m['admin.nav.credits']() },
      ],
    },
    {
      href: '/admin/categories',
      label: m['admin.nav.content'](),
      icon: FolderOpen,
      group,
      items: [
        { href: '/admin/categories', label: m['admin.nav.categories']() },
        { href: '/admin/posts', label: m['admin.nav.posts']() },
        { href: '/admin/tickets', label: m['admin.nav.tickets']() },
      ],
    },
  ];

  const footerNavItems = [
    ...(permissions?.isSuperAdmin
      ? [
          {
            href: '/admin/footer-badges',
            label: m['admin.nav.footer_badges'](),
            icon: BadgeCheck,
          },
        ]
      : []),
    {
      href: '/admin/indexnow',
      label: m['admin.nav.indexnow'](),
      icon: Radar,
    },
    {
      href: '/admin/settings',
      label: m['admin.nav.settings'](),
      icon: Settings,
    },
    { href: '/', label: m['common.systems.home'](), icon: Home, newTab: true },
  ];

  return (
    <AppLayout
      navItems={navItems}
      footerNavItems={footerNavItems}
      brand={envConfigs.app_name}
      brandHref="/admin"
      headerExtra={<AdminSignOut />}
      profileHref="/settings/profile"
      requirePermission="admin.*"
    >
      <Outlet />
    </AppLayout>
  );
}
