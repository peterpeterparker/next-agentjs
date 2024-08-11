## Errors

Agent-js does not work in Next.js pre-rendering context.

Performing IC calls either lead to the error:

```
Error: Invalid certificate: Invalid signature from replica ncr4b-rasb7-tueb3-n4uos-5nxou-3wbxv-xmyt3-wfdsd-vu4b6-5x3cp-aqe signed query.
```

Or the other error:

```
 ⨯ Error: Invalid certificate: Certificate is signed more than 5 minutes in the past. Certificate time: 2024-08-11T15:55:32.249Z Current time: 2024-08-11T16:03:35.551Z
```

## Reproduction

```
git clone https://github.com/peterpeterparker/next-agentjs
cd next-agentjs
npm ci
npm run dev
```

Open URL [http://localhost:3000/products/2vxsx-fae](http://localhost:3000/products/2vxsx-fae)

## Notes

The code has no particular logic. It's sole purpose is showcasing the issue.