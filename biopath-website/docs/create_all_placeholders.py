#!/usr/bin/env python3

import os

# Define all the missing files with their metadata
files_to_create = {
    # Reference section
    'reference/protocols.md': {
        'title': 'Protocol Templates',
        'description': 'Ready-to-use peptide protocol templates for various applications and goals.',
        'keywords': ['protocol templates', 'peptide protocols', 'dosing protocols'],
        'tags': ['protocols', 'templates', 'dosing', 'guidelines']
    },
    'reference/dosing-guide.md': {
        'title': 'Dosing Guide',
        'description': 'Comprehensive dosing guidelines for therapeutic peptides with safety considerations.',
        'keywords': ['peptide dosing', 'dosing guidelines', 'peptide doses'],
        'tags': ['dosing', 'guidelines', 'safety', 'administration']
    },
    'reference/stacking-guide.md': {
        'title': 'Stacking Guide',
        'description': 'Guide to combining peptides for synergistic effects and optimal results.',
        'keywords': ['peptide stacking', 'peptide combinations', 'synergistic effects'],
        'tags': ['stacking', 'combinations', 'synergy', 'optimization']
    },
    'reference/safety-checklist.md': {
        'title': 'Safety Checklist',
        'description': 'Essential safety checklist for peptide use including contraindications and monitoring.',
        'keywords': ['peptide safety', 'safety checklist', 'contraindications'],
        'tags': ['safety', 'checklist', 'monitoring', 'contraindications']
    },
    
    # Peptides section
    'peptides/cjc-1295.md': {
        'title': 'CJC-1295 - Growth Hormone Optimizer',
        'description': 'Complete guide to CJC-1295 for growth hormone optimization, anti-aging, and performance enhancement.',
        'keywords': ['CJC-1295', 'growth hormone', 'anti-aging', 'performance'],
        'tags': ['peptide', 'growth-hormone', 'anti-aging', 'performance']
    },
    'peptides/ipamorelin.md': {
        'title': 'Ipamorelin - Clean Growth Hormone Release',
        'description': 'Comprehensive guide to Ipamorelin for natural growth hormone stimulation without side effects.',
        'keywords': ['Ipamorelin', 'growth hormone', 'clean stimulation', 'recovery'],
        'tags': ['peptide', 'growth-hormone', 'recovery', 'clean']
    },
    'peptides/ghk-cu.md': {
        'title': 'GHK-Cu - Skin Rejuvenation Catalyst',
        'description': 'Complete guide to GHK-Cu for skin rejuvenation, wound healing, and anti-aging applications.',
        'keywords': ['GHK-Cu', 'skin rejuvenation', 'anti-aging', 'wound healing'],
        'tags': ['peptide', 'skin', 'anti-aging', 'cosmetic', 'healing']
    },
    'peptides/mots-c.md': {
        'title': 'MOTS-c - Mitochondrial Optimizer',
        'description': 'Comprehensive guide to MOTS-c for mitochondrial enhancement, metabolism, and longevity.',
        'keywords': ['MOTS-c', 'mitochondrial', 'metabolism', 'longevity'],
        'tags': ['peptide', 'mitochondrial', 'metabolism', 'longevity']
    },
    'peptides/thymosin-alpha-1.md': {
        'title': 'Thymosin Alpha-1 - Immune System Enhancer',
        'description': 'Complete guide to Thymosin Alpha-1 for immune system support and anti-aging benefits.',
        'keywords': ['Thymosin Alpha-1', 'immune system', 'anti-aging', 'longevity'],
        'tags': ['peptide', 'immune', 'anti-aging', 'longevity']
    },
    'peptides/selank.md': {
        'title': 'Selank - Cognitive Enhancement & Anxiety Relief',
        'description': 'Comprehensive guide to Selank for cognitive enhancement, anxiety reduction, and stress management.',
        'keywords': ['Selank', 'cognitive enhancement', 'anxiety', 'nootropic'],
        'tags': ['peptide', 'cognitive', 'anxiety', 'nootropic', 'stress']
    },
    'peptides/noopept.md': {
        'title': 'Noopept - Memory & Learning Enhancer',
        'description': 'Complete guide to Noopept for memory enhancement, learning acceleration, and neuroprotection.',
        'keywords': ['Noopept', 'memory enhancement', 'learning', 'neuroprotection'],
        'tags': ['peptide', 'memory', 'learning', 'neuroprotection', 'cognitive']
    },
    'peptides/aod-9604.md': {
        'title': 'AOD-9604 - Targeted Fat Loss',
        'description': 'Comprehensive guide to AOD-9604 for targeted fat loss and metabolic enhancement.',
        'keywords': ['AOD-9604', 'fat loss', 'metabolism', 'weight loss'],
        'tags': ['peptide', 'fat-loss', 'metabolism', 'weight-loss']
    },
    
    # Protocols section
    'protocols/athletic-performance.md': {
        'title': 'Athletic Performance Protocols',
        'description': 'Peptide protocols for athletic performance, recovery, and injury prevention.',
        'keywords': ['athletic performance', 'sports peptides', 'recovery protocols'],
        'tags': ['protocols', 'athletic', 'performance', 'recovery', 'sports']
    },
    'protocols/fat-loss.md': {
        'title': 'Fat Loss Protocols',
        'description': 'Evidence-based peptide protocols for fat loss, body composition, and metabolic enhancement.',
        'keywords': ['fat loss protocols', 'weight loss peptides', 'body composition'],
        'tags': ['protocols', 'fat-loss', 'weight-loss', 'metabolism']
    },
    'protocols/anti-aging.md': {
        'title': 'Anti-Aging Protocols',
        'description': 'Comprehensive anti-aging protocols using peptides for longevity and healthspan optimization.',
        'keywords': ['anti-aging protocols', 'longevity peptides', 'healthspan'],
        'tags': ['protocols', 'anti-aging', 'longevity', 'healthspan']
    },
    'protocols/cognitive-enhancement.md': {
        'title': 'Cognitive Enhancement Protocols',
        'description': 'Peptide protocols for cognitive enhancement, memory improvement, and brain optimization.',
        'keywords': ['cognitive enhancement', 'nootropic peptides', 'brain optimization'],
        'tags': ['protocols', 'cognitive', 'nootropic', 'brain', 'memory']
    },
    'protocols/aesthetic-optimization.md': {
        'title': 'Aesthetic Optimization Protocols',
        'description': 'Peptide protocols for skin rejuvenation, hair growth, and aesthetic enhancement.',
        'keywords': ['aesthetic protocols', 'skin peptides', 'cosmetic peptides'],
        'tags': ['protocols', 'aesthetic', 'skin', 'cosmetic', 'beauty']
    }
}

# Create the files
for file_path, metadata in files_to_create.items():
    # Ensure directory exists
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    
    # Create the markdown content
    content = f"""---
title: {metadata['title']}
description: {metadata['description']}
keywords: {metadata['keywords']}
tags: {metadata['tags']}
---

# {metadata['title']}

:::info Coming Soon
This comprehensive guide is currently in development and will be available soon.
:::

## What This Section Will Cover

- Detailed information and protocols
- Evidence-based recommendations
- Safety considerations
- Implementation guidelines

**Related**: [Getting Started](../implementation/getting-started) | [Safety Practices](../ebook/safety-practices)

---

**Tags**: {' '.join(['#' + tag for tag in metadata['tags']])}
"""
    
    # Write the file
    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"Created: {file_path}")

print("All placeholder files created successfully!")
