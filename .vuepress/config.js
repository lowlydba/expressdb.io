// .vuepress/config.js
module.exports = {
  title: 'Express DB',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides',
		ariaLabel: 'Guides Menu',
		items: [
		{ text: 'What is SQL Server Express?', link: '/what-is-sql-server-express/'},
		{ text: 'Express vs. Standard vs. Enterprise', link: '/sql-server-express-feature-comparison/'},
		{ text: 'SQL Express vs. LocalDB', link: '/sql-server-express-vs-localdb/'},
		{ text: 'Which Express Version to Use', link: '/which-sql-server-express-version-to-use/'},
		{ text: 'Which Management Studio to Use', link: '/which-sql-server-management-studio-version/'},
		] 
	  },
      { text: 'Limitations',
		ariaLabel: 'Limitations Menu',
		items: [
		{ text: 'Size Restrictions', link: '/sql-server-express-database-size-limit/'},
		{ text: 'Hardware Restrictions', link: '/sql-server-express-hardware-limitations/'},
		{ text: 'Missing Database Mail', link: '/sql-server-express-sp-send-dbmail/'}
		]
	  },
	  { text: 'Best Practices',
		ariaLabel: 'Best Practices Menu',
		items: [
		{ text: 'Backups', link: '/sql-server-express-backups'},
		{ text: 'Maintenance', link: '/sql-server-express-maintenance/'},
		{ text: 'Security', link: '/sql-server-express-security-best-practices/'}
		]
	  },
	  { text: 'Automation',
		ariaLabel: 'Automation Menu',
		items: [
		{ text: 'Replacing SQL Agent', link: '/sql-server-express-replace-sql-agent/'},
		{ text: 'Unattended Installation', link: '/sql-server-express-unattended-install/'}
		]
	  },
	  { text: 'Tools & Resources',
		ariaLabel: 'Free Tools Menu',
		items: [
		{ text: 'Scripts, Apps, and Resources', link: '/sql-server-resources/'},
		{ text: 'ExpressSQL Scripts', link: 'https://spsizeoptimiser.lowlydba.com/'},
		{ text: 'Azure Data Studio', link: '/azure-data-studio/'}
		]
	  },
	  { text: 'Author',
		ariaLabel: 'Author Menu',
		items: [
		{ text: 'About', link: '/about/'},
		{ text: 'Contact', link: '/contact/'}
		]
	  }
    ],
    lastUpdated: 'Last Updated',
	sidebar: 'auto',
	// Assumes GitHub. Can also be a full GitLab url.
    repo: 'LowlyDBA/expressdb',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'LowlyDBA/expressdb',
    // if your docs are not at the root of the repo:
    docsDir: '/',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page on Github'
  },
  markdown: {
		lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-116662570-1'
      }
    ]
  ],
  head: [
	['link', { rel: 'icon', href: '/favicon.png'}]
  ]
}
